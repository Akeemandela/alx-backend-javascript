export default function getListStudentIds(list) {
  if (Array.isArray(lst)) {
    return list.map((obj) => obj.id);
  }

  return [];
}
