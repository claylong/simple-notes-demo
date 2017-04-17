<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->get('/');

        $this->assertEquals(
            $this->app->version(), $this->response->getContent()
        );
    }
}

/*TODO - Tests needed

Sign in page
Error on incorrect
On login, session, route to dashboard
Dashboard, can create, retrieve, update, and delete
OwnerID used when getting notes
Encrypted creds
Middleware authentication checks

*/