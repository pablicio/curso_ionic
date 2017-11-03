<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\UserRepository;
use App\Entities\User;
use App\Validators\UserValidator;

/**
 * Class UserRepositoryEloquent
 * @package namespace App\Repositories;
 */
class UserRepositoryEloquent extends BaseRepository implements UserRepository
{
    public function create(array $attributes)
    {
        $attributes['password'] =
            User::generatePassword(isset($attributes['password']) ?
                $attributes['password'] :
                null);

        $model = parent::create($attributes);
//        \UserVerification::generate($model);
//        \UserVerification::send($model,"Sua conta foi criada");
        return $model;
    }

    public function update(array $attributes, $id)
    {
        if(isset($attributes['password'])){
            $attributes['password'] = User::generatePassword($attributes['password']);
        }
        return parent::update($attributes, $id);
    }

    public function model()
    {
        return User::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
