@extends('master')
@section('content')
<button type="button" class="btn btn-primary">New Note</button>
<a class="btn btn-link" href="/logout">Logout</a>

<h2>Notes</h2>
<div class="panel panel-default">
  <div class="panel-heading">This is a Note Title (created by Joe User, Fri 12:00) [ edit / delete ]</div>
  <div class="panel-body">
    This is the note body.
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">This is another Note Title (created by Joe User, Fri 11:30) [ edit / delete ]</div>
  <div class="panel-body">
    This is another note body.
  </div>
</div>
@stop