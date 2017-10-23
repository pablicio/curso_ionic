@extends('layouts.app')
@section('content')

    <!-- Page header -->
    @include('shared.header', $paramns = [
         'nome' => 'Produtos',
         'url' => '/produtos/create',
         'breadcrum' => [
             [
                 'nome' => 'Produtos',
                 'url'  => '/produtos'
             ]
             ]
      ])
    <!-- /page header -->

    <!-- Conteúdo -->
    <div class="panel">
        <div class="content table-responsive table-full-width">


            <table class="table datatable-export">
                <thead>
                <tr>
                    <th>Referência</th>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th class="text-center">Ações</th>
                </tr>
                </thead>
                <tbody>

                @foreach($produtos as $chave => $produto)
                    <tr>
                        <td>{{ $produto->referencia }}</td>
                        <td>{{ $produto->nome}}</td>
                        <td>{{ $produto->valor}}</td>

                        <td class="text-center">
                            <ul class="nav navbar-nav navbar-right">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="icon-three-bars color"></i>
                                        <b class="caret hidden-sm hidden-xs"></b>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="{{url('produtos/' . $produto->id . '/edit')}}"><i
                                                        class="pe-7s-note"></i>
                                                Editar Produtos</a>
                                        </li>
                                        <li>
                                            <a href="{{url('produtos/' . $produto ->id . '/delete')}}"><i
                                                        class="pe-7s-trash"></i>
                                                Excluir Produtos</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
    </div>

@endsection

