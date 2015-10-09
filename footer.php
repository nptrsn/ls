<div id="footer">
  <ul id="bottomnav">
    <?php wp_nav_menu(array('theme_location' => 'footer_nav')); ?>
  </ul>
  <p>&copy; <?php echo date('Y') ?> <a href="<?php bloginfo('url') ?>">
    <?php bloginfo('name') ?>
    </a>
  <?php wp_footer(); ?>
</div>
</div>
</div>
</body></html>