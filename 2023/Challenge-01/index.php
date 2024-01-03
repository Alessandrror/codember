<?php

  $start = microtime(true);

  $message = file_get_contents('./2023/Challenge-01/file.txt');

  function counter ($message): string
  {
    $arr = explode(' ', $message);
    $counts = [];

    foreach ($arr as $v) {
      if (isset($counts[$v])) {
        $counts[$v]++;
      } else {
        $counts[$v] = 1;
      };
    };

    $data = array_map(function ($v) use ($counts) {
      return $v . $counts[$v];
    }, array_unique($arr));

    return implode('', $data);
  };

  echo counter($message);
  echo PHP_EOL;
  echo "Execution time: ". (microtime(true) - $start)*1000 ." s";
  // Removes the '%' symbol at the end in zsh
  echo PHP_EOL;

?>