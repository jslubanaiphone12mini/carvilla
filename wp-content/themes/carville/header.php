<!doctype html>
<html class="no-js" lang="en">

    <head>
        <!-- meta data -->
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

        <!-- title of site -->
        <title><?php echo get_bloginfo('name'); ?></title>

		<!-- wp head start -->
        <?php wp_head(); ?>
		<!-- wp head end -->

    </head>
	
	<body <?php body_class();  ?> >
		<!--[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->
	
		<!--welcome-hero start -->
		<?php $banner = get_field('banner'); ?>
		<section id="home" class="welcome-hero" style="background: url(<?php echo $banner['background_image']; ?>);">

			<!-- top-area Start -->
			<div class="top-area">
				<div class="header-area">
					<!-- Start Navigation -->
				    <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

				        <div class="container">

				            <!-- Start Header Navigation -->
				            <div class="navbar-header">
				                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
				                    <i class="fa fa-bars"></i>
				                </button>
				                <!-- <a class="navbar-brand" href="<?php //echo HOME_URL; ?>">carvilla<span></span></a> -->
				                <a class="navbar-brand" href="<?php echo HOME_URL; ?>">
								<?php
								    if (has_custom_logo()) {
								        the_custom_logo();
								    } else {
								        echo get_bloginfo('name');
								    }
								?>
				                	<span></span>
				                </a>

				            </div><!--/.navbar-header-->
				            <!-- End Header Navigation -->

				            <!-- Collect the nav links, forms, and other content for toggling -->
				            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
				                <!-- <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
				                    <li class=" scroll active"><a href="#home">home</a></li>
				                    <li class="scroll"><a href="#service">service</a></li>
				                    <li class="scroll"><a href="#featured-cars">featured cars</a></li>
				                    <li class="scroll"><a href="#new-cars">new cars</a></li>
				                    <li class="scroll"><a href="#brand">brands</a></li>
				                    <li class="scroll"><a href="#contact">contact</a></li>
				                </ul>/.nav --> 
				                <?php
								wp_nav_menu(array(
								    'theme_location' => 'primary_menu',
								    'container'      => null,
								    // 'container_class'=> 'main-menu',
								    'menu_class'     => 'nav navbar-nav navbar-right',
								    'menu_id'     => 'menu-header-menu',
								    // 'items_wrap'     => 'menu-list',
							        // 'walker'         => new Custom_Walker_Nav_Menu(), // Use custom walker
							        'items_wrap'     => '<ul id="%1$s" class="%2$s" data-in="fadeInDown" data-out="fadeOutUp">%3$s</ul>',
						            // 'before'          => '<li class="custom-li-class">', // Adding class to each <li>


								));
								?>
				            </div><!-- /.navbar-collapse -->
				        </div><!--/.container-->
				    </nav><!--/nav-->
				    <!-- End Navigation -->
				</div><!--/.header-area-->
			    <div class="clearfix"></div>

			</div><!-- /.top-area-->
			<!-- top-area End -->