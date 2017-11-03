<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\RegisterUserRepository;
use App\Entities\RegisterUser;
use App\Validators\RegisterUserValidator;

/**
 * Class RegisterUserRepositoryEloquent
 * @package namespace App\Repositories;
 */
class RegisterUserRepositoryEloquent extends BaseRepository implements RegisterUserRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return RegisterUser::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
