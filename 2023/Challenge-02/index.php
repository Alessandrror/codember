<?php

  $start = microtime(true);

  $message = file_get_contents('./2023/Challenge-02/file.txt');

  function compiler ($message): string
  {
    $arr = str_split($message);
    $num = 0;
    $nums = [];

    foreach ($arr as $v) {
      switch($v){
        case '#':
          $num=$num+1;
          break;
        case '@':
          $num=$num-1;
          break;
        case '*':
          $num=$num*$num;
          break;
        case '&':
          array_push($nums, $num);
          break;
      };
    };

    return implode('', $nums);
  };

  echo compiler($message);
  echo PHP_EOL;
  echo "Execution time: ". (microtime(true) - $start)*1000 ." s";
  // Removes the '%' symbol at the end in zsh
  echo PHP_EOL;

?>