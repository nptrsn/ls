<?php get_header(); ?>
    <div class="content">
      <nav class="main-nav clearfix">
        <ul class="main-menu">  
          <li class="nav-logo">
            <img src="http://lucidsolutions.io/wp-content/themes/ls/media/lucid-solutions.png" onclick="location.href='http://lucidsolutions.io'"/>
          </li>
          <li class="link-services">Services</li>
          <li class="link-contact">Contact</li>
        </ul>
      </nav>
        <video autoplay loop muted poster="<?php echo get_template_directory_uri(); ?>/media/ls.png" class="home-bg" src="http://lucidsolutions.io/wp-content/themes/ls/media/ls2.mov" type="video/mov">
        </video>
        <div class="bodyCopy">
          <h1>Your Challenges. Our <span class="orange">Solutions.</span></h1>
        </div>
      </div>
    </div><!-- / end content -->

    <div class="servicesWrap">
      <div class="servicesCopy">
        <h1 class="orange">Services</h1>
        <h3>CMS &amp; Design: Ruby on Rails, Drupal, Wordpress, Responsive and Bootstrap</h3>
        <h3>Development: HTML5, CSS3, JavaScript, Ruby and PHP</h3>
        <h3>Online Marketing: SEO, Social Media and E-Mail Marketing</h3>
        <div class="contact-arrrow-wrap clearfix">
          <i class="fa fa-arrow-right orange"></i><h2 class="services-to-contact">Let's Get In Touch...</h2>
        </div>
      </div>
    </div>

    <div class="contactWrap">
      <h1 class="orange">Contact</h1>
      <?php echo apply_filters('the_content', '[contact-form-7 id="9" title="Contact"]'); ?>
    </div>

<?php /* footer */ get_footer(); ?>