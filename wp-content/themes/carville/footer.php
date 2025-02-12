
		<!--contact start-->
		<footer id="contact"  class="contact">
			<div class="container">
				<div class="footer-top">
					<div class="row">
						<div class="col-md-3 col-sm-6 footer-1">
							<div class="single-footer-widget sfw1">
								<?php if (is_active_sidebar('footer-1')) : ?>
						            <?php
									ob_start();
									dynamic_sidebar('footer-1');
									$sidebar_output = ob_get_clean();
									print_r($sidebar_output);
						            ?>
							        <?php else : ?>
							            <p>Add widgets to the footer in WordPress Admin → Appearance → Widgets.</p>
							        <?php endif; ?>
							</div>


							<!-- <div class="single-footer-widget">
								<div class="footer-logo">
									<a href="index.html">carvilla</a>
								</div>
								<p>
									Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.
								</p>
								<div class="footer-contact">
									<p>info@themesine.com</p>
									<p>+1 (885) 2563154554</p>
								</div>
							</div> -->
						</div>
						<div class="col-md-2 col-sm-6">
							<!-- <div class="single-footer-widget">
								<h2>about devloon</h2>
								<ul>
									<li><a href="#">about us</a></li>
									<li><a href="#">career</a></li>
									<li><a href="#">terms <span> of service</span></a></li>
									<li><a href="#">privacy policy</a></li>
								</ul>
							</div> -->
							<div class="single-footer-widget sfw2">
								<?php if (is_active_sidebar('footer-2')) : ?>
						            <?php
									ob_start();
									dynamic_sidebar('footer-2');
									$sidebar_output = ob_get_clean();
									print_r($sidebar_output);
						            ?>
							        <?php else : ?>
							            <p>Add widgets to the footer in WordPress Admin → Appearance → Widgets.</p>
							        <?php endif; ?>
							</div>
						</div>
						<div class="col-md-3 col-xs-12">
							<div class="single-footer-widget">
								<h2>top brands</h2>
								<div class="row">
									<div class="col-md-7 col-xs-6">
										<?php if (is_active_sidebar('footer-3')) : ?>
							            <?php
										ob_start();
										dynamic_sidebar('footer-3');
										$sidebar_output = ob_get_clean();
										print_r($sidebar_output);
							            ?>
								        <?php else : ?>
								            <p>Add widgets to the footer in WordPress Admin → Appearance → Widgets.</p>
								        <?php endif; ?>
										<!-- <ul>
											<li><a href="#">BMW</a></li>
											<li><a href="#">lamborghini</a></li>
											<li><a href="#">camaro</a></li>
											<li><a href="#">audi</a></li>
											<li><a href="#">infiniti</a></li>
											<li><a href="#">nissan</a></li>
										</ul> -->
									</div>
									<div class="col-md-5 col-xs-6">
										<?php if (is_active_sidebar('footer-4')) : ?>
							            <?php
										ob_start();
										dynamic_sidebar('footer-4');
										$sidebar_output = ob_get_clean();
										print_r($sidebar_output);
							            ?>
								        <?php else : ?>
								            <p>Add widgets to the footer in WordPress Admin → Appearance → Widgets.</p>
								        <?php endif; ?>
										<!-- <ul>
											<li><a href="#">ferrari</a></li>
											<li><a href="#">porsche</a></li>
											<li><a href="#">land rover</a></li>
											<li><a href="#">aston martin</a></li>
											<li><a href="#">mersedes</a></li>
											<li><a href="#">opel</a></li>
										</ul> -->
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-offset-1 col-md-3 col-sm-6">
							<div class="single-footer-widget sfw">
								<h2>news letter</h2>
								<div class="footer-newsletter">
									<p>
										Subscribe to get latest news  update and informations
									</p>
								</div>
								<?php if (is_active_sidebar('footer-5')) : ?>
					            <?php
								ob_start();
								dynamic_sidebar('footer-5');
								$sidebar_output = ob_get_clean();
								print_r($sidebar_output);
					            ?>
						        <?php else : ?>
						            <p>Add widgets to the footer in WordPress Admin → Appearance → Widgets.</p>
						        <?php endif; ?>
								
								
								<div class="hm-foot-email">
									<div class="foot-email-box">
										<input  type="email" id="newsletterInputID" class="form-control" placeholder="Add Email" required>
									</div><!--/.foot-email-box-->
									<div class="foot-email-subscribe" id="newsletterSubmitID">
										<span ><i class="fa fa-arrow-right"></i></span>
									</div><!--/.foot-email-icon-->
								</div><!--/.hm-foot-email-->
							</div>
						</div>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="row">
						<div class="col-sm-6">
							<?php
							// echo "string";
							echo get_field('copyright_text', OPTION_PAGE_ID);
							
							?>
							
						</div>
						<div class="col-sm-6">
							<div class="footer-social">
								<a href="<?php echo get_field('facebook', OPTION_PAGE_ID); ?>"><i class="fa fa-facebook"></i></a>	
								<a href="<?php echo get_field('instagram', OPTION_PAGE_ID); ?>"><i class="fa fa-instagram"></i></a>
								<a href="<?php echo get_field('linkedin', OPTION_PAGE_ID); ?>"><i class="fa fa-linkedin"></i></a>
								<a href="<?php echo get_field('pinterest', OPTION_PAGE_ID); ?>"><i class="fa fa-pinterest-p"></i></a>
								<a href="<?php echo get_field('behance', OPTION_PAGE_ID); ?>"><i class="fa fa-behance"></i></a>	
							</div>
						</div>
					</div>
				</div><!--/.footer-copyright-->
			</div><!--/.container-->

			<div id="scroll-Top">
				<div class="return-to-top">
					<i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
				
			</div><!--/.scroll-Top-->
			
        </footer><!--/.contact-->
		<!--contact end-->

        <!-- wp footer start -->
        <?php wp_footer(); ?>
        <!-- wp footer end -->
        
    </body>
	
</html>