# Talent App - Monorepo con Module Federation

Este es un monorepo que contiene una aplicación host y un micro-frontend de autenticación, construidos con React, TypeScript y Webpack Module Federation.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (v18 o superior)

## Configuración del Proyecto

Sigue estos pasos para configurar el entorno de desarrollo local.

1.  **Clona el repositorio:**

    ```bash
    git clone <URL_DE_TU_REPOSITORIO_EN_GITHUB>
    cd talent-app
    ```

2.  **Habilita Corepack:**

    Este proyecto utiliza Yarn 4. Corepack es la forma recomendada de gestionar las versiones del gestor de paquetes.

    ```bash
    corepack enable
    ```

3.  **Instala las dependencias:**

    Ejecuta el siguiente comando en la raíz del proyecto. Instalará las dependencias para todos los workspaces (`host-app` y `mfe-auth`).

    ```bash
    yarn install
    ```

## Ejecutar la Aplicación

Para iniciar los servidores de desarrollo para ambos proyectos simultáneamente, ejecuta:

```bash
yarn start
```

- La aplicación **host** estará disponible en `http://localhost:3001`.
- El micro-frontend de **autenticación** estará disponible en `http://localhost:3002`.
