<?php namespace APp\Http\Controllers\Api;


use App\Entities\Produto;
use App\Http\Controllers\Controller;
use App\Repositories\ProdutoRepository;
use Illuminate\Http\Request;


class ProdutosController extends Controller
{

    /**
     * @var ProdutoRepository
     */
    protected $repository;

    /**
     * @var ProdutoValidator
     */

    public function __construct(ProdutoRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->all();
    }

}
