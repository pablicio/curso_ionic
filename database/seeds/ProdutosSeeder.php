<?php

use Illuminate\Database\Seeder;

class ProdutosSeeder extends Seeder
{
    public function run()
    {
        DB::table('produtos')->insert([
            [
                'referencia' =>  '345345453',
                'nome' => 'Feijão',
                'valor' => '112.98',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'referencia' =>  '3453454534',
                'nome' => 'Arroz',
                'valor' => '224.98',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'referencia' =>  '24353543453',
                'nome' => 'Macarrão',
                'valor' => '344.98',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'referencia' =>  '456456456',
                'nome' => 'Cadeado',
                'valor' => '112.98',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'referencia' =>  '5654645456',
                'nome' => 'Fita Adesiva',
                'valor' => '224.98',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'referencia' =>  '345543545345',
                'nome' => 'Latão',
                'valor' => '344.98',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);
    }
}