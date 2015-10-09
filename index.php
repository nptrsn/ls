<?php get_header(); ?>

  <div id="main">
    <div id="content">
    
    	<?php if (!is_single() && !is_page() && !is_front_page()) : ?><h1><?php wp_title(' ', true, 'right'); ?></h1><?php endif; ?>
        
        <?php /* begin the loop */ if (have_posts()) : ?>
		
		<?php while (have_posts()) : the_post(); ?>
        
			<?php if (is_page()) : /* show page contents */ ?>
       
            <?php endif; /* end if page or post */ ?>
        
        <?php endwhile;/* end the main loop */ ?>
        
        <?php endif; /* end if have_posts */ ?>      
    
    
    </div><!-- / end content -->
    
    
  </div><!-- / end main -->

<?php /* footer */ get_footer(); ?>