import { useState, useEffect } from 'react';

import { TaskType } from '../types/taskType';
import { StateType } from '../types/stateType';
import { TimeOfDayType } from '../types/timeOfDayType';

interface InfoProps {
    initTasks: TaskType[];//tableau de tâches
}

function useTaskManager({ initTasks } : InfoProps) {
    const [isActiveUpdateForm, setIsActiveUpdateForm] = useState(false);
    const [tasks, setTasks] = useState(initTasks);
    const [tempUpdatedTasks, setTempUpdatedTasks] = useState(tasks);
    const [isCheckedSelectAllTasks, setIsCheckedSelectAllTasks] = useState(false);
    const [selectedTasksIds, setSelectedTasksIds] = useState([] as number[]);
    const [filterState, setFilterState] = useState(StateType.All);
    const [filterTimeOfDay, setFilterTimeOfDay] = useState(TimeOfDayType.All);
    const [filterName, setFilterName] = useState('');

    const tasksForTable = isActiveUpdateForm ? tempUpdatedTasks : tasks;

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    let tasksFilteredForTable = [] as TaskType[];
  
    //filtre les tâches
    tasksForTable.forEach((task) => {
        if (!task.name.toLowerCase().includes(filterName.toLowerCase())) {
            return;
        }
        if (filterState != 'all' && task.state != filterState) {
            return;
        }
        if (filterTimeOfDay != 'all' && task.timeOfDay != filterTimeOfDay) {
            return;
        }
        tasksFilteredForTable.push(task);
    });

    /**
     * Ajout d'une tâche
     */
    function handleAddTask(name: string, timeOfDay: TimeOfDayType) {
        let id = 0;
        if (tasks.length) {
            const lastTask = tasks.reduce((accumulator, currentTask) => {
                return currentTask.id > accumulator.id ? currentTask : accumulator
            });
            id = lastTask.id + 1;
        }
        let state = StateType.NotCompleted;
        let newTasks = [...tasks, { id, name, state, timeOfDay }];
        setTasks(newTasks);
        setTempUpdatedTasks(newTasks);
    }

    /**
     * Affichage du formulaire de modification des tâches
     */
    function handleActivateUpdateForm() {
        setIsActiveUpdateForm(!isActiveUpdateForm);
    }

    /**
     * Le clique sur la case qui sélectionne toutes les tâches met à jour les tâches sélectionnées
     */
    function handleClickCheckboxSelectAllTasks() {
        let tmpIsCheckedSelectAllTasks = !isCheckedSelectAllTasks;

        setIsCheckedSelectAllTasks(tmpIsCheckedSelectAllTasks);

        let tasksIds = [] as number[];
        if (tmpIsCheckedSelectAllTasks) {
            tasks.forEach((task) => {
                tasksIds.push(task.id);
            });
        }
        setSelectedTasksIds(tasksIds);
    }

    /**
     * Le clique sur la case de sélection d'une tâche met à jour les tâches sélectionnées
     */
    function handleClickCheckboxSelectTask(id: number, checked: boolean) {
        setSelectedTasksIds((prevSelectedTasksIds) => {
            if (checked) {
                return [...prevSelectedTasksIds, id];
            }
            return prevSelectedTasksIds.filter((idTask) =>
                idTask !== id
            );
        });
    }

    /**
     * Modification des tâches temporaires
     */
    function handleSetTempUpdatedTasks(id: number, propertyName: string, value: string | TimeOfDayType | boolean) {
        setTempUpdatedTasks((prevTempTasks) => {
            return prevTempTasks.map((task) =>
                task.id === id ? { ...task, [propertyName]: value } : task
            );
        });
    }

    /**
     * Remplacement des tâches par les tâches temporaires
     */
    function handleSubmitUpdateForm() {
        setTasks(tempUpdatedTasks);
        setIsActiveUpdateForm(!isActiveUpdateForm);
    }

    /**
     * Suppression des tâches sélectionnées
     */
    function handleDeleteSelectedTasks() {
        if (confirm("Confirmez-vous la suppression ?")) {
            let tasksToKeep = tasksForTable.filter((task) => !selectedTasksIds.includes(task.id) || !tasksFilteredForTable.includes(task));
            setTasks(tasksToKeep);
            setTempUpdatedTasks(tasksToKeep);
            setIsCheckedSelectAllTasks(false);
            setSelectedTasksIds([]);
        }
    }

    /**
     * Suppression de toutes les tâches
     */
    function handleDeleteAllTasks() {
        if (confirm("Confirmez-vous la suppression ?")) {
            let tasksToKeep = tasksForTable.filter((task) => !tasksFilteredForTable.includes(task));
            setTasks(tasksToKeep);
        }
    }

    /**
     * Suppression d'une tâche
     */
    function handleDeleteTask(id: number) {
        if (confirm("Confirmez-vous la suppression ?")) {
            let newTasks = tasks.filter((task) => task.id !== id);
            setTasks(newTasks);
            setTempUpdatedTasks(newTasks);
        }
    }

    return {
        tasks,
        tasksFilteredForTable,
        selectedTasksIds,
        filterState,
        filterTimeOfDay,
        filterName,
        isActiveUpdateForm,
        isCheckedSelectAllTasks,
        handleAddTask,
        setFilterState,
        setFilterTimeOfDay,
        setFilterName,
        handleActivateUpdateForm,
        handleClickCheckboxSelectAllTasks,
        handleClickCheckboxSelectTask,
        handleSetTempUpdatedTasks,
        handleSubmitUpdateForm,
        handleDeleteSelectedTasks,
        handleDeleteAllTasks,
        handleDeleteTask
    };
};
  
export default useTaskManager;