<?php

namespace CodeFlix\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Produto extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [
        'nome',
        'referencia',
        'valor'
    ];

}
