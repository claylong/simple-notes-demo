<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model 
{
    protected $table = 'Notes';

    protected $fillable = ['title', 'body', 'deleted'];

    public function User()
    {
        return $this->hasOne('App\User', 'id', 'user_id');
    }

}