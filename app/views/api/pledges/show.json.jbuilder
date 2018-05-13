json.pledge do
  json.set! pledge.id do
    json.extract! @pledge, :id, :amount, :supporter_id, :project_id
  end
end
