<?php get_header(); ?>
<?php
$banner = get_field('banner');
// echo "<pre>";
// print_r($banner);
// echo "</pre>";
?>
			<div class="container">
				<div class="welcome-hero-txt">
					<h2><?php echo $banner['heading']; ?></h2>
					<p>
						<?php echo $banner['sub_heading']; ?>
					</p>
					<button class="welcome-btn" onclick="window.location.href='#'">contact us</button>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="model-search-content">
							<div class="row">
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									<div class="single-model-search">
										<h2>select year</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">year</option><!-- /.option-->

											  	<option value="2018">2018</option><!-- /.option-->

											  	<option value="2017">2017</option><!-- /.option-->
											  	<option value="2016">2016</option><!-- /.option-->

											</select><!-- /.select-->
										</div><!-- /.model-select-icon -->
									</div>
									<div class="single-model-search">
										<h2>body style</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">style</option><!-- /.option-->

											  	<option value="sedan">sedan</option><!-- /.option-->

											  	<option value="van">van</option><!-- /.option-->
											  	<option value="roadster">roadster</option><!-- /.option-->

											</select><!-- /.select-->
										</div><!-- /.model-select-icon -->
									</div>
								</div>
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									<div class="single-model-search">
										<h2>select make</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">make</option><!-- /.option-->

											  	<option value="toyota">toyota</option><!-- /.option-->

											  	<option value="holden">holden</option><!-- /.option-->
											  	<option value="maecedes-benz">maecedes-benz.</option><!-- /.option-->

											</select><!-- /.select-->
										</div><!-- /.model-select-icon -->
									</div>
									<div class="single-model-search">
										<h2>car condition</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">condition</option><!-- /.option-->

											  	<option value="something">something</option><!-- /.option-->

											  	<option value="something">something</option><!-- /.option-->
											  	<option value="something">something</option><!-- /.option-->

											</select><!-- /.select-->
										</div><!-- /.model-select-icon -->
									</div>
								</div>
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									<div class="single-model-search">
										<h2>select model</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">model</option><!-- /.option-->

											  	<option value="kia-rio">kia-rio</option><!-- /.option-->

											  	<option value="mitsubishi">mitsubishi</option><!-- /.option-->
											  	<option value="ford">ford</option><!-- /.option-->

											</select><!-- /.select-->
										</div><!-- /.model-select-icon -->
									</div>
									<div class="single-model-search">
										<h2>select price</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">price</option><!-- /.option-->

											  	<option value="$0.00">$0.00</option><!-- /.option-->

											  	<option value="$0.00">$0.00</option><!-- /.option-->
											  	<option value="$0.00">$0.00</option><!-- /.option-->

											</select><!-- /.select-->
										</div><!-- /.model-select-icon -->
									</div>
								</div>
								<div class="col-md-2 col-sm-12">
									<div class="single-model-search text-center">
										<button class="welcome-btn model-search-btn" onclick="window.location.href='#'">
											search
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section><!--/.welcome-hero-->
		<!--welcome-hero end -->

		<!--service start -->
		<section id="service" class="service">
			<div class="container">
				<div class="service-content">
					<div class="row">
						<?php
						$specialites = get_field('specialites');
						// echo "<pre>";
						// print_r($specialites);
						// echo "</pre>";
						if($specialites) {
							foreach ($specialites as $specialitesKV) {
								// code...
								if(!empty($specialitesKV)) {
									?>
									<div class="col-md-4 col-sm-6">
										<div class="single-service-item">
											<div class="single-service-icon">
												<?php echo $specialitesKV['icon']; ?>
											</div>
											<h2><a href="#"><?php echo $specialitesKV['heading']; ?></a></h2>
											<p>
											<?php echo $specialitesKV['sub_heading']; ?>				
											</p>
										</div>
									</div>
									<?php
								}
							}
						}
						?>
						<!-- <div class="col-md-4 col-sm-6">
							<div class="single-service-item">
								<div class="single-service-icon">
									<i class="flaticon-car"></i>
								</div>
								<h2><a href="#">largest dealership <span> of</span> car</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
								</p>
							</div>
						</div>
						<div class="col-md-4 col-sm-6">
							<div class="single-service-item">
								<div class="single-service-icon">
									<i class="flaticon-car-repair"></i>
								</div>
								<h2><a href="#">unlimited repair warrenty</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
								</p>
							</div>
						</div>
						<div class="col-md-4 col-sm-6">
							<div class="single-service-item">
								<div class="single-service-icon">
									<i class="flaticon-car-1"></i>
								</div>
								<h2><a href="#">insurence support</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. 
								</p>
							</div>
						</div> -->
					</div>
				</div>
			</div><!--/.container-->

		</section><!--/.service-->
		<!--service end-->

		<!--new-cars start -->
		<section id="new-cars" class="new-cars">
			<div class="container">
				<div class="section-header">
					<p>checkout <span>the</span> latest cars</p>
					<h2>newest cars</h2>
				</div><!--/.section-header-->
				<div class="new-cars-content">
					<div class="owl-carousel owl-theme" id="new-cars-carousel">
						<?php
						$args_new = array(
						    'limit'    => 8,
						    'category' => array('newest-cars'), // Use slug or array of slugs
						    'status'   => 'publish',
						    'order' => 'ASC'
						);

						$products_new = wc_get_products($args_new);
						if (!empty($products_new)) {
						    foreach ($products_new as $product_new) {
						    	// $car_name_new = $product_new->get_name();
							?>
							<div class="new-cars-item">
								<div class="single-new-cars-item">
									<div class="row">
										<div class="col-md-7 col-sm-12">
											<div class="new-cars-img">
												<img src="<?php echo get_the_post_thumbnail_url($product_new->get_id()); ?>" alt="<?php echo $product_new->get_name(); ?>"/>
											</div><!--/.new-cars-img-->
										</div>
										<div class="col-md-5 col-sm-12">
											<div class="new-cars-txt">
												<h2><a href="#"><?php echo $product_new->get_name(); ?></span></a></h2>
												<?php echo wpautop($product_new->get_description()); ?>
												<button class="welcome-btn new-cars-btn" onclick="window.location.href='#'">
													view details
												</button>
											</div><!--/.new-cars-txt-->	
										</div><!--/.col-->
									</div><!--/.row-->
								</div><!--/.single-new-cars-item-->
							</div><!--/.new-cars-item-->
							<?php
						    }
						}

						?>
						
					</div><!--/#new-cars-carousel-->
				</div><!--/.new-cars-content-->
			</div><!--/.container-->

		</section><!--/.new-cars-->
		<!--new-cars end -->

		<!--featured-cars start -->
		<section id="featured-cars" class="featured-cars">
			<div class="container">
				<div class="section-header">
					<p>checkout <span>the</span> featured cars</p>
					<h2>featured cars</h2>
				</div><!--/.section-header-->
				<div class="featured-cars-content">
					<div class="row">
						<?php
						// echo "<h2>featured cars</h2>";
						$args = array(
						    'limit'    => 8,
						    'category' => array('featured-cars'), // Use slug or array of slugs
						    'status'   => 'publish',
						    'order' => 'ASC'
						);

						$products = wc_get_products($args);

						if (!empty($products)) {
						    foreach ($products as $product) {
						    	$car_id = $product->get_id();
						    	// $car_id = 172;
						    	$car_name = $product->get_name();
						    	$year = get_field('year', $car_id);
						    	$model = get_field('model', $car_id);
						    	$power = get_field('power', $car_id);
						    	$transmission = get_field('transmission', $car_id);
						    	?>
								<div class="col-lg-3 col-md-4 col-sm-6">
									<div class="single-featured-cars">
										<div class="featured-img-box">
											<div class="featured-cars-img">
												<img src="<?php echo get_the_post_thumbnail_url($product->get_id()); ?>" alt="<?php echo $product->get_name(); ?>">
											</div>
											<div class="featured-model-info">
												<p>
													model: <?php echo $year; ?>
													<span class="featured-mi-span"> <?php echo $model; ?></span> 
													<span class="featured-hp-span"> <?php echo $power; ?></span>
													 <?php echo $transmission; ?>
												</p>
											</div>
										</div>
										<div class="featured-cars-txt">
											<h2><a href="#"><?php echo $product->get_name(); ?></a></h2>
											<h3><?php echo $product->get_price_html(); ?></h3>
											<p>
												<?php echo wp_strip_all_tags($product->get_short_description()); ?>
											</p>
										</div>
									</div>
								</div>
						    	<?php
						    }
						} else {
							echo "<h3>No featured product found...</h3>";
						}

						?>
						<!-- <div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src="<?php echo THEME_DIR; ?>/assets/images/featured-cars/fc1.png" alt="cars">
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><a href="#">BMW 6-series gran coupe</a></h2>
									<h3>$89,395</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src="<?php echo THEME_DIR; ?>/assets/images/featured-cars/fc2.png" alt="cars">
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><a href="#">chevrolet camaro <span>wmv20</span></a></h2>
									<h3>$66,575</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src="<?php echo THEME_DIR; ?>/assets/images/featured-cars/fc3.png" alt="cars">
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><a href="#">lamborghini <span>v520</span></a></h2>
									<h3>$125,250</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src="<?php echo THEME_DIR; ?>/assets/images/featured-cars/fc4.png" alt="cars">
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><a href="#">audi <span> a3</span> sedan</a></h2>
									<h3>$95,500</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div> -->
					</div>
					<!-- <div class="row">
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src="<?php echo THEME_DIR; ?>/assets/images/featured-cars/fc4.png" alt="cars">
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><a href="#">infiniti <span>z5</span></a></h2>
									<h3>$36,850</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src="<?php echo THEME_DIR; ?>/assets/images/featured-cars/fc5.png" alt="cars">
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><a href="#">porsche <span>718</span> cayman</a></h2>
									<h3>$48,500</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src="<?php echo THEME_DIR; ?>/assets/images/featured-cars/fc7.png" alt="cars">
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><a href="#"><span>bmw 8-</span>series coupe</a></h2>
									<h3>$56,000</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src="<?php echo THEME_DIR; ?>/assets/images/featured-cars/fc8.png" alt="cars">
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><a href="#">BMW <span> x</span>series-6</a></h2>
									<h3>$75,800</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</div><!--/.container-->

		</section><!--/.featured-cars-->
		<!--featured-cars end -->

		<!-- clients-say strat -->
		<section id="clients-say"  class="clients-say">
			<div class="container">
				<div class="section-header">
					<h2>what our clients say</h2>
				</div><!--/.section-header-->
				<div class="row">
					<div class="owl-carousel testimonial-carousel">
						<?php
						$testimonial_data = get_field('testimonial');

						if (empty($testimonial_data)) {
							// code...
							echo "<h2>No testimonial data available...!</h2>";
						} else {
							foreach ($testimonial_data as $testimonial_data_kv) {
								// code...
								

								$test_name = get_the_title($testimonial_data_kv);
								$test_desc = get_the_content($testimonial_data_kv);
								$test_thum = get_the_post_thumbnail_url($testimonial_data_kv);
								$test_place = get_field('place', $testimonial_data_kv);
								$post = get_post($testimonial_data_kv); // Get the post object

								// echo "<pre>";
								// print_r($post->post_content);
								// echo "</pre>";
								?>
								<div class="col-sm-3 col-xs-12">
									<div class="single-testimonial-box">
										<div class="testimonial-description">
											<div class="testimonial-info">
												<div class="testimonial-img">
													<img src="<?php echo $test_thum; ?>" alt="<?php echo $test_name; ?>" />
												</div><!--/.testimonial-img-->
											</div><!--/.testimonial-info-->
											<div class="testimonial-comment">
												<p>
												<?php echo $post->post_content; ?>
												</p>
											</div><!--/.testimonial-comment-->
											<div class="testimonial-person">
												<h2><a href="#"><?php echo $test_name; ?></a></h2>
												<h4><?php echo $test_place; ?></h4>
											</div><!--/.testimonial-person-->
										</div><!--/.testimonial-description-->
									</div><!--/.single-testimonial-box-->
								</div><!--/.col-->
								<?php
							}
						}
						?>
						
					</div><!--/.testimonial-carousel-->
				</div><!--/.row-->
			</div><!--/.container-->

		</section><!--/.clients-say-->	
		<!-- clients-say end -->

		<!--brand strat -->
		<section id="brand"  class="brand">
			<div class="container">
				<div class="brand-area">
					<div class="owl-carousel owl-theme brand-item">
						<?php
						$brand_data = get_field('brands', 58);
						// echo "<pre>";
						// print_r($brand_data);
						// echo "</pre>";
						if (empty($brand_data)) {
							// code...
							echo "<h2>No brand data available...!</h2>";
						} else {
							foreach ($brand_data as $brand_data_kv) {
								$brand_name = get_the_title($brand_data_kv);
								$brand_thum = get_the_post_thumbnail_url($brand_data_kv);

								?>
								<div class="item">
									<a href="#">
										<img src="<?php echo $brand_thum; ?>" alt="<?php echo $brand_name; ?>" />
									</a>
								</div>
								<?php
							}
						}

						?>
						
					</div><!--/.owl-carousel-->
				</div><!--/.clients-area-->

			</div><!--/.container-->

		</section><!--/brand-->	
		<!--brand end -->

		<!--blog start -->
		<section id="blog" class="blog"></section><!--/.blog-->
		<!--blog end -->
<?php get_footer(); ?>