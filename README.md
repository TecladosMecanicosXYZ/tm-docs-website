# Teclados Mecánicos

## Sitio web de documentación y recursos

Este sitio web está construido usando [Docusaurus 2](https://docusaurus.io/), un moderno generador de sitios estáticos.

### Instalación

```bash
npm install
```

### Desarrollo local

```bash
npm start
```

Este comando iniciará un servidor de desarrollo local y abrirá una ventana del navegador. La mayoría de los cambios se verá reflejados en vivo sin necesidad de tener que reiniciar el servidor.

### Compilación

```bash
npm run build
```

Este comando generará el contenido estático dentro del directorio `build` y podrá ser publicado/servido usando cualquier servicio de hospedaje de contenidos estáticos.

### Despliegue

Este proceso será realizado de manera automática por las GitHub Actions configuradas en el repositorio. Solo es necesario enviar (push) y combinar (merge) los nuevos cambios en la rama `main` y el workflow comenzará a compilar y a desplegar el sitio.

Para realizar un despliegue manual con propositos de prueba o para eventos en los que GitHub Actions no puedan operar, solo copie todo el contenido del directorio `build` en el directorio raíz del servidor a utilizar. Luego de esto puede previsualizar el sitio sin necesidad de configuraciones adicionales.
