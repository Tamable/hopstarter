export const fetchRewards = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/rewards/',
  })
}

export const fetchReward = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/rewards/${id}`,
  })
}

export const createReward = (reward) => {
  return $.ajax({
    method: 'POST',
    url: `/api/rewards`,
    data: { reward: reward }
  })
}

export const updateReward = (reward) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/rewards/${reward.id}`,
    data: { reward: reward }
  })
}

export const deleteReward = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/rewards/${id}`
  })
}
