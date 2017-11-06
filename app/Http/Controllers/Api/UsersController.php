<?php namespace APp\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserSettingRequest;
use App\Repositories\UserRepository;

class UsersController extends Controller
{
    /**
     * @var UserRepository
     */
    private $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function updateSettings(UserSettingRequest $request)
    {
        $data = $request->only('password');
        $this->repository->update($data, $request->user('api')->id);

        return $request->user('api');
    }
}
