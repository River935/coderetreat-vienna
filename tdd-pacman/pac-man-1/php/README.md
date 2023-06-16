phpunit setup
==========

This is a simple bootstrap project for PHP with phpunit

For PHP 7.2 or above (might need to update the composer.json with your version) just run:

```
#https://getcomposer.org/download/
composer update
composer install

```

To run the tests just run:

```
phpunit --bootstrap vendor/autoload.php tests --filter testNotFailing
```
You need PHP 7.2 or above.


If you have legacy version of php please change composer.json file
and include the version that is compatible with you version of PHP


If you change the phpunit version do not forget to run:

```
./composer update --with-dependencies

```

# run from docker

```
'./test.sh'
```
