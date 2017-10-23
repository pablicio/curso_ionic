<!-- Page header -->


<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-arrow-left52 position-left"></i> <span
                        class="text-semibold"></span> {{ $paramns['nome'] }}
            </h4>
        </div>

        <div class="heading-elements">
            <div class="heading-btn-group">
                @if(isset($paramns['url']))
                    <div class="heading-btn-group">
                        <a href="{{ $paramns['url'] }}"
                           class="btn btn-success">
                            @if(isset($paramns['btnNome'] ))
                                <span>  {{ $paramns['btnNome'] }}</span>
                            @else
                                <span> Adicionar {{ $paramns['nome'] }}</span>
                            @endif
                        </a>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="/"><i class="icon-home2 position-left"></i> Início</a></li>

            @foreach($paramns['breadcrum'] as $item)
                <li><a href="{{ $item['url'] }}"> {{ $item['nome'] }}</a></li>
            @endforeach
        </ul>

    </div>
</div>
<!-- /page header -->
