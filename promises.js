export default async function classPromises() {
  //   console.log("Hello promises");
  //   let handlePromises = false;
  //   // Promises
  //   // Resolve -> La promesa cumplio con su objetivo
  //   // Reject -> La promesa falló

  //   console.log("Console primario");

  //   setTimeout(() => {
  //     console.log("Console demorado");
  //   }, 3000);

  //   setTimeout(() => {
  //     console.log("Console con menos segundos");
  //   }, 1000); // 1sg

  //   // milisegundo 98ms 800ms
  //   // Sintaxis
  //   const promise = new Promise((resolve, reject) => {
  //     if (handlePromises) {
  //       resolve("PROMESA RESULTA");
  //       return;
  //     }
  //     reject("PROMESA NO RESUELTA");
  //   });

  //   promise.then((valor) => {
  //     console.log(valor);

  //   return 1
  // }).then((valorRetornadoDelPrimerThen) => {
  //   console.log(valorRetornadoDelPrimerThen);
  // })
  //   // 1. Then and Catch

  //   // Then: De manejar el valor de resolve
  //   promise.then((valor) => {
  //     console.log(valor);
  //   }).catch((err) => {
  //     console.error(err, "THEN / CATCH");
  //   }).finally(() => {
  //     console.log("TERMINO LA PROMESA");
  //   });

  //   console.log(promise);

  //   // Caso de uso de una promesa
  //   // 1. Leer un archivo
  //   // 2. Escribir un archivo
  //   // 3. cuando usas setTimeOut (Personalizado)
  //   // 4. Eliminas un archivo
  //   // 5. Conexión a una base de datos
  //   // 6. Crear un consulta personalizada

  //   // Casos de uso para desenvolver
  //   // 1. Peticion a una API
  //   // 2. Subir una imagen

  //   // 2. Async / Await
  //  // NO ES COMÚN
  //   const miPromiseWithAsync = () => {
  //     return new Promise((resolve, reject) => {
  //       if (handlePromises) {
  //         resolve("PROMESA RESULTA");
  //         return;
  //       }
  //       reject("PROMESA NO RESUELTA");
  //     });
  //   };

  //   try {
  //     const valor = await miPromiseWithAsync();

  //     console.log(valor);
  //   } catch (error) {
  //     console.log(error, "ASYNC / AWAIT");
  //   } finally {
  //     console.log("FINALLy");
  //   }

  // Metodos de promesas

  // Promise.all():
  // [Promise1, Promise2] -> El resultado depende del resultado de todas

  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promesa resulta");
    }, 1000);
  });

  const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Promesa SI resulta");
    }, 1000);
  });

  Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
  }).catch((err) => {
    console.log(err);
  });

  // Promise.race()

  const promisesRaces = await Promise.race([promise1, promise2]);

  console.log(promisesRaces);

  // Promise.resolve
  const promiseResolve = Promise.resolve(10);
  // Promise.reject
  const promiseRject = Promise.reject(10);

  try {
    const valor = await miPromiseWithAsync();
    console.log(valor);
  } catch (error) {
    console.log(error, "ASYNC / AWAIT");
  } finally {
    console.log("FINALLy");
  }
}


