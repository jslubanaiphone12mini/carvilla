<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '2025_jan_23' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qsBdb?b/[Wkh|GY@uk VwZ,C)fkf7rYm=jj.6M%a@PHRO|4PE%Ux8<F7$0/zX7.L' );
define( 'SECURE_AUTH_KEY',  'TQJ^iiV%&UmK(+5DyfBl8Fp S*(7%y2Z!si@s;!EC(8aVKPl*ta}K@Pl`&NnTVPu' );
define( 'LOGGED_IN_KEY',    'hI7_#{K5=t^Zzc@EBmsG5E4r>H{4-Xmx)8:Ti&B~r,.`0iS=>}u!cMg`F,Y.&($-' );
define( 'NONCE_KEY',        'nr[,DQh5QP~nF?*{YR5Ok4prC.rj#w3Cxj}}K!<>h?0g7L}9H9Gyv>LTM@;fol$&' );
define( 'AUTH_SALT',        'sO5=i8,kAvwst/@79;^e8_@rpGxYv-a~mcOPe=(sUdR;LLWM9giN9bl`rtgl>OIz' );
define( 'SECURE_AUTH_SALT', 'v:eIKV2M4i{K~A)3G;esTcCy=6}*S7bB#kZ-39_sz_,BHA`lWX~]Dv6QhPUKa-Hg' );
define( 'LOGGED_IN_SALT',   'X5~%!Sc|kAH?GE60R{l {V>LHJ*!0p<%(=Tjw#*s]an[4+[]1e/*;X y<zR,K3TP' );
define( 'NONCE_SALT',       'B%B3d2-4[GI.[jUBjC^&;5dQ/5rI#:R72FqpXXCr_Z${,coBQNK=$2`kK^rArm&J' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
