json.pledge do
  json.extract! @pledge, :id, :amount, :supporter_id, :project_id
end
