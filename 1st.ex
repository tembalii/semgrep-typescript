defmodule MyApp.Parser do
  def parse_param(param) do
    key = String.to_atom(param)  # ⚠️ Unsafe: converts arbitrary input to atom
    Map.get(%{foo: "bar"}, key)
  end
end
