<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

$p=shell_exec('cd /home/sragenfl/nizam2.sragenflorist.com/ && git pull');
var_dump($p);
echo 'ddd';
?>