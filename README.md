SimplyTask
SimplyTask es una aplicación web autogestionable y de código abierto para la gestión de tareas. Diseñada especialmente para pequeñas y medianas empresas, así como grupos académicos, ofrece una alternativa ligera, segura y gratuita frente a herramientas complejas o de alto costo como Jira, Asana o Monday.

🚀 Características
CRUD de tareas con backend REST

Autenticación segura con roles diferenciados (admin, user)

Gestión de usuarios por parte del administrador

Interfaz moderna, responsiva y basada en componentes

Arquitectura escalable y organizada

🛠️ Tecnologías Utilizadas
Componente	Tecnología / Descripción
Backend	Node.js + Express.js – Framework ligero para construir APIs RESTful
Base de Datos	MySQL – Base de datos relacional con soporte para integridad y relaciones estructuradas
Sistema de Roles	Login con autenticación mediante JSON Web Tokens (JWT) – Roles: Admin, User
Frontend	React + HTML + CSS – Interfaz basada en componentes, limpia y responsiva

🎯 Objetivo
Desarrollar una aplicación que permita gestionar tareas de forma efectiva y segura en equipos de hasta 25 personas, eliminando la dependencia de herramientas costosas o poco seguras.

Objetivos Específicos
Implementar operaciones CRUD sobre tareas.

Autenticación con control de acceso basado en roles.

Permitir al administrador editar usuarios: nombre, correo, rol y estado activo.

📌 Estado del Proyecto
Actualmente en fase inicial:

Se completó la lógica de inicio de sesión.

Roles diferenciados funcionales (admin, user).

Prototipo visual diseñado en Figma.

Estructura inicial del proyecto definida para desarrollo posterior.

🧠 Desafíos Técnicos
Definición y estructura del sistema de roles.

Prevención de conflictos administrativos (ej. un admin no puede eliminar a otro admin).

Organización clara del proyecto desde el inicio para facilitar la escalabilidad.
