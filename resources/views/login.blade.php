@extends('master')
@section('content')
<div class="container">
<div class="row">
<div class="col-sm-6 col-md-4 col-md-offset-4">
    <h2>Please sign in</h2>
    <form>
        <div class="form-group form-group-lg">
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group form-group-lg">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary btn-lg">Submit</button>
    </form>
</div>
</div>
</div>
@stop