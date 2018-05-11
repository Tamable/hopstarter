export const createPledge = (pledge) => {
  return $.ajax({
    method: 'POST',
    url: `/api/pledges`,
    data: { pledge: pledge }
  })
}

export const updatePledge = (pledge) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/pledges/${pledge.id}`,
    data: { pledge: pledge }
  })
}

export const deletePledge = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/pledges/${id}`
  })
}
