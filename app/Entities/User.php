<?php

namespace CodeFlix\Entities;


use CodeFlix\Projeto\Painel\Permission;
use CodeFlix\Projeto\Painel\Role;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_user');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'permission_user', 'user_id', 'permission_id');
    }

    public function hasSinglePermission($permission, $user)
    {
        $permissionUser = User::find($user->id)->custom_permissions;

        return collect($permissionUser)->keys()->contains($permission['name']);
    }

    public function hasPermissionRole($permission, $user = null)
    {

        return self::hasAnyRoles($user->roles, $permission, $user);
    }

    public function hasAnyRoles($roles = null, $permission = null, $user = null)
    {
        if (is_array($roles) || is_object($roles)) {

            if ($roles->isEmpty())

                return self::hasSinglePermission($permission, $user);

            else {

                return !!$this->roles->intersect($permission->roles)->count();
            }

        }

        return $this->roles->contains('name', $roles);
    }

    public function isRoot()
    {
        if (self::hasAnyRoles('Root'))
            return true;
    }
}
