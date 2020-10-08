function ordenar(numeros)
{
    auxiliar= 0;
    for(a = 0; a < numeros.length; a++)
    {
          for(b = a+1; b < numeros.length; b++)
          {
              if(numeros[a] > numeros[b])
              {
                  auxiliar = numeros[a];
                  numeros[a] = numeros[b];
                  numeros[b] = auxiliar;
              }
          }
    }
    return numeros;
}

var numeros = [14, 23, 2, 69, 41, 20, 30, 40];

console.log(ordenar(numeros));