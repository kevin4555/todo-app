# To-Do List App

## Características

- Crear una tarea con una descripción.
- Mostrar una lista de tareas creadas.
- Marcar una tarea como completada.
- Eliminar una tarea de la lista.

## Tecnologías Utilizadas

- **Backend:** Node.js.
- **Frontend:** React con Vite.
- **Almacenamiento:** En memoria (sin base de datos).

---

## Instalación y Ejecución

### 1. Clonar el Repositorio

```sh
 git clone <URL_DEL_REPOSITORIO>
 cd <NOMBRE_DEL_REPOSITORIO>
```

### 2. Ejecutar el Backend

```sh
 cd backend
 npm install
 npm start
```

Por defecto, el backend correrá en `http://localhost:5000/`.

### 3. Ejecutar el Frontend

```sh
 cd frontend
 npm install
 npm start
```

Por defecto, el frontend estará disponible en `http://localhost:5173/` (o el puerto asignado por Vite/React).

---

## Endpoints del Backend

### **Obtener todas las tareas**

`GET /tasks`

### **Crear una nueva tarea**

`POST /tasks`

```json
{
  "description": "Nueva tarea"
}
```

### **Marcar o desmarcar una tarea como completada**

`PATCH /tasks/:id/complete` (Si una tarea ya está completada y se vuelve a marcar, se desmarca)

### **Eliminar una tarea**

`DELETE /tasks/:id`

---

## Uso de la Aplicación

1. Abrir el frontend en el navegador (Por defecto `http://localhost:5173/`).
2. Agregar nuevas tareas utilizando el formulario.
3. Marcar tareas como completadas con un clic.
4. Eliminar tareas innecesarias.

---

## Notas

- El proyecto no utiliza base de datos, por lo que las tareas se pierden al reiniciar el servidor.
- Se ha seguido la estructura de un API REST para la comunicación entre el frontend y el backend.
