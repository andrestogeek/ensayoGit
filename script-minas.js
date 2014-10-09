function inicio()
{

// 	function explosion()
// 	{
// 		document.write("Pisaste "+suelo[cordenadas]+" Perdiste pendejo");
// 	}

// 	function ganaste()
// 	{
// 		document.write("Pisaste "+suelo[cordenadas]+" Ganaste wepa!");
// 	}

// 	var x, y;
// 	x = prompt("por favor digita tu 1ra cordenada para el eje x", 0);
// 	y = prompt("por favor digita tu 2da cordenada para el eje y", 0);
// var prueba = 0;


var matrix1 = new Array();
var matrix2 = new Array();

for(j = 0; j < 6; j++)
{
	for(i = 0; i < 5; i++)
	{
		matrix2[i] = Math.floor(Math.random()*5);
	}
	matrix1[j] = matrix2;
	// document.write(matrix1+"<br>");
}

console.log(matrix1);



// var campo_minado = [ [0, 1, 0], 
// 					 [1, 0, 1], 
// 					 [0, 0, 1] ];

// var suelo = ["Cesped", "Mina"];

// var cordenadas = campo_minado[y][x];
// if (cordenadas == 1)
// 	{
// 		explosion();
// 	}
// 	else
// 	{
// 		ganaste();
// 	}


}

// $num = Array();
//  reset($num);
//  for($i=1;$i<=10;$i++) 
//  {
//    $num[$i]=rand(1,100);
//     if($i>1) 
//     {
//        for($x=1; $x<$i; $x++)
//        {
//          if($num[$i]==$num[$x]) 
//          { 
//            $i--; 
//            break; 
//          }
//       }
//    }
//  }
//  foreach($num as $valor) 
//  {
//    echo "$valor<BR>";
//  }