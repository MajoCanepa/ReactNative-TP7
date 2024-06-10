import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddTask from './AddTask';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

export default function ListTask() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarea 1', date: '2024-06-10' },
    { id: 2, title: 'Tarea 2', date: '2024-06-11' },
    { id: 3, title: 'Tarea 3', date: '2024-06-12' },
    { id: 4, title: 'Tarea 4', date: '2024-06-13' },
    { id: 5, title: 'Tarea 5', date: '2024-06-14' },
  ]);

  const handleAddTask = () => {
    setShowAddForm(true);
  };

  const handleCancelAddTask = () => {
    setShowAddForm(false);
  };

  return (
    <View style={styles.container}>
      {showAddForm ? (
        <View style={styles.formContainer}>
          <AddTask onCancel={handleCancelAddTask} />
        </View>
      ) : (
        <View style={styles.taskList}>
          <Text style={styles.title}>Lista de Tareas</Text>
          {tasks.map((task) => (
            <Link
              key={task.id}
              href={`/tasks/${task.id}`}
              style={styles.taskItem}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="bars" size={20} color='#900' style={{ marginRight: 10 }} />
                <Text>{task.title}</Text>
              </View>
            </Link>
          ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={handleAddTask}
            >
              <Text style={styles.buttonText}>Agregar tarea</Text>
            </TouchableOpacity>
             
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 100,
  },
  taskList: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskItem: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    textDecorationLine: 'none',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  addButton: {
    backgroundColor: '#28a745',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
