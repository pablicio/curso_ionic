<?php

namespace App\Http\Controllers;



use App\Entities\Produto;
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

        $produtos = $this->repository->all();

        return view('produtos.index', compact('produtos'));
    }

    public function create()
    {


        return view('produtos.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ProdutoCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->repository->create($request->all());

        return redirect()->to('/produtos');
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        dd('aoiqoq');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Produto $produto)
    {

        return view('produtos.form', compact('produto'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  ProdutoUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(Request $request, $id)
    {

        $this->repository->update($request->all(), $id);

        return redirect()->to('produtos');

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */

    public function delete($id)
    {
        $this->repository->delete($id);

        return redirect()->back();
    }

    public function destroy($id)
    {
        $this->repository->delete($id);

        return redirect()->back();
    }
}
