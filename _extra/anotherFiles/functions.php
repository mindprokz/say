<?php
add_action( 'init', 'my_script_enqueuer' );

function my_script_enqueuer() {
   wp_register_script( "my_voter_script", get_template_directory_uri() . '/bundle.js');
   wp_localize_script( 'my_voter_script', 'myAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));

   //wp_enqueue_script( 'jquery' );
   wp_enqueue_script( 'my_voter_script' );

}
