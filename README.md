# TWP Frontend

Aplicación móvil para la gestión de paseos caninos. Permite a **clientes** y **paseadores** organizar, seguir en tiempo real y administrar paseos de mascotas.  
Incluye funcionalidades de:
- Solicitud y rastreo de paseos.
- Gestión de disponibilidad y aceptación de solicitudes.
- Calificación de servicios.
- Herramientas administrativas para la supervisión de usuarios, paseos y pagos.

<p align="center">
  <img src="https://iili.io/3W6nOL7.png" alt="TWP Logo" height="200">
</p>

## Tecnologías utilizadas

- **React Native**
- **Expo Router**
- **Axios**

## Requisitos previos

- [Node.js (versión recomendada)](https://nodejs.org/en/download/current)
- [npm (Node Package Manager)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Puerto del servidor: **8081**

## Instalación y configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

```bash
git clone https://github.com/funktasthic/twp-frontend.git
cd twp-frontend
```

2. **Verificar y cambiar de rama (si es necesario):**

```bash
git branch -a
git checkout [nombre-de-la-rama]
```

3. **Instalar dependencias:**

```bash
npm install
```

4. **Obtener tu dirección IP local (IPv4):**

```bash
ipconfig
```
> Copia tu dirección IPv4; la necesitarás para configurar las variables de entorno.

5. **Iniciar sesión en Expo Go (si aún no lo has hecho):**

```bash
npx expo login -h
```

6. **Configurar las variables de entorno:**

Copia el archivo `.env.example` y renómbralo como `.env`. Luego edítalo con los valores necesarios:

```bash
copy .env.example .env
```
(En macOS o Linux usa `cp .env.example .env`)

7. **Iniciar la aplicación:**

```bash
npx expo start
```
Luego, escanea el código QR desde Expo Go o usa un emulador.

## Autores

- [@funktasthic](https://github.com/funktasthic)
