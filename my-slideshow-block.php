<?php



function my_slideshow_block_assets() {
    wp_register_script(
        'my-slideshow-block',
        plugins_url('dist/block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-components', 'wp-api'),
        filemtime(plugin_dir_path(__FILE__) . 'dist/block.js')
    );

    wp_register_style(
        'my-slideshow-block-style',
        plugins_url('dist/block-style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'dist/block-style.css')
    );

    wp_register_style(
        'my-slideshow-block-editor-style',
        plugins_url('dist/block-editor-style.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'dist/block-editor-style.css')
    );
}

add_action('init', 'my_slideshow_block_assets');


function my_slideshow_block_init() {
    register_block_type('my-slideshow-block/my-slideshow', array(
        'editor_script' => 'my-slideshow-block',
        'editor_style' => 'my-slideshow-block-editor-style',
        'style' => 'my-slideshow-block-style',
    ));
}

add_action('init', 'my_slideshow_block_init');
