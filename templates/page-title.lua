function Pandoc(doc)
  if not doc.meta.pagetitle then
    for _, block in ipairs(doc.blocks) do
      if block.t == "Header" and block.level == 1 then
        doc.meta.pagetitle = pandoc.utils.stringify(block.content)
        break
      end
    end
  end

  return doc
end
