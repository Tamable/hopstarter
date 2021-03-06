import * as ApiUtil from '../util/project_api_util'

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const receiveProjects = (payload) => {
  return {
    type: RECEIVE_PROJECTS,
    projects: payload.projects,
    users: payload.users,
    categories: payload.categories,
  }
}

export const receiveProject = (payload) => {
  return {
    type: RECEIVE_PROJECT,
    project: payload.project,
    user: payload.user,
    category: payload.category
  }
}

export const removeProject = (id) => {
  return {
    type: REMOVE_PROJECT,
    id: id
  }
}

export const receiveProjectErrors = (errorArr) => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors: errorArr
  }
}

export const fetchProjects = () => {
  return dispatch => {
    return ApiUtil.fetchProjects().then((payload) => {
      return dispatch(receiveProjects(payload));
    })
  }
}

export const fetchProject = (id) => {
  return dispatch => {
    return ApiUtil.fetchProject(id).then((payload) => {
      return dispatch(receiveProject(payload));
    })
  }
}

export const createProject = (project) => {
  return dispatch => {
    return ApiUtil.createProject(project).then((payload) => {
      return dispatch(receiveProject(payload));
      return payload;
    }).fail((err) => {
      return dispatch(receiveProjectErrors(err.responseJSON));
    })
  }
}

export const updateProject = (project) => {
  return dispatch => {
    return ApiUtil.updateProject(project).then((payload) => {
      return dispatch(receiveProject(payload));
      return payload;
    }).fail((err) => {
      return dispatch(receiveProjectErrors(err.responseJSON));
    })
  }
}

export const deleteProject = (id) => {
  return dispatch => {
    return ApiUtil.deleteProject(id).then(() => {
      return dispatch(removeProject(id));
    }).fail((err) => {
      return dispatch(receiveProjectErrors(err.responseJSON));
    })
  }
}
