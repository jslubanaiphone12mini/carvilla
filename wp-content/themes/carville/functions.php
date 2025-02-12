<?php
define('THEME_DIR', get_template_directory_uri());
define('HOME_URL', get_home_url());
define('OPTION_PAGE_ID', 24);

function add_custom_scripts() {
    // CSS CDNs
    wp_enqueue_style('google-fonts-api', 'https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i', array(), null);
    wp_enqueue_style('google-fonts-api-css', 'https://fonts.googleapis.com/css?family=Rufina:400,700', array(), null);
    wp_enqueue_style('font-awesome.min.css', THEME_DIR . '/assets/css/font-awesome.min.css', array(), null);
    wp_enqueue_style('linear-icon-css', THEME_DIR . '/assets/css/linearicons.css', array(), null);
    wp_enqueue_style('flaticon.css', THEME_DIR . '/assets/css/flaticon.css', array(), null);
    wp_enqueue_style('animate.css', THEME_DIR . '/assets/css/animate.css', array(), null);

    wp_enqueue_style('owl.carousel.css', THEME_DIR . '/assets/css/owl.carousel.min.css', array(), null);
    wp_enqueue_style('owl.carousel.css.default', THEME_DIR . '/assets/css/owl.theme.default.min.css', array(), null);

    wp_enqueue_style('bootstrap.min.css', THEME_DIR . '/assets/css/bootstrap.min.css', array(), null);
    wp_enqueue_style('bootsnav', THEME_DIR . '/assets/css/bootsnav.css', array(), null);
    wp_enqueue_style('style.css', THEME_DIR . '/assets/css/style.css', array(), null);
    wp_enqueue_style('theme.css', THEME_DIR . '/style.css?rand='.rand(), array(), null);
    wp_enqueue_style('responsive.css', THEME_DIR . '/assets/css/responsive.css', array(), null);


    // JS CDNs
    wp_enqueue_script('jquery-js', THEME_DIR . '/assets/js/jquery.js', array(), null, true);
    wp_enqueue_script('modernizr.min.js', '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js', array(), null, true);
    wp_enqueue_script('jquery.easing.min.js', '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js', array(), null, true);
    
    wp_enqueue_script('bootstrap.min.js', THEME_DIR . '/assets/js/bootstrap.min.js', array(), null, true);
    wp_enqueue_script('bootsnav-js', THEME_DIR . '/assets/js/bootsnav.js', array(), null, true);
    wp_enqueue_script('owl.carousel.js', THEME_DIR . '/assets/js/owl.carousel.min.js', array(), null, true);
    wp_enqueue_script('Custom-JS', THEME_DIR . '/assets/js/custom.js', array(), null, true);
    wp_enqueue_script('theme-JS', THEME_DIR . '/assets/theme/custom.js', array(), null, true);
    // wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'add_custom_scripts');

function add_custom_favicon() {
    if (has_site_icon()) {
        echo '<link rel="shortcut icon" href="' . esc_url(get_site_icon_url()) . '" type="image/icon">';
    }
}
add_action('wp_head', 'add_custom_favicon');

function theme_custom_logo_setup() {
    add_theme_support('custom-logo', array(
        'height'      => 100,  // Set logo height
        'width'       => 400,  // Set logo width
        'flex-height' => true, // Allow flexible height
        'flex-width'  => true, // Allow flexible width
    ));

    //add menu support start
    register_nav_menus(array(
        'primary_menu' => __('Primary Menu', 'your-theme'),
        'footer_menu'  => __('Footer Menu', 'your-theme'),
    ));
    //add menu support end

    add_theme_support('post-thumbnails'); // Enables support for all post types

}
add_action('after_setup_theme', 'theme_custom_logo_setup');

class Custom_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"submenu\" data-depth=\"$depth\">\n"; // Adds data-depth attribute
    }
}

function add_menu_item_class($classes, $item, $args, $depth) {
    // Add 'menu_item' class to all <li> items
    $classes[] = 'scroll';
     // Check if this is the first menu item (menu_order = 1)
    if ($item->menu_order == 1) {
        $classes[] = 'active';
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_menu_item_class', 10, 4);

function register_footer_widgets() {
    for ($i = 1; $i <= 5; $i++) {
        register_sidebar(array(
            'name'          => "Footer Widget Area $i",
            'id'            => "footer-$i",
            'before_widget' => '<div class="footer-widget">',
            'after_widget'  => '</div>',
            'before_title'  => '<h4 class="widget-title">',
            'after_title'   => '</h4>',
        ));
    }
}
add_action('widgets_init', 'register_footer_widgets');


