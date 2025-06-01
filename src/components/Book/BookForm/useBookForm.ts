import { useState, useEffect } from "react";
import type { Book } from "../InterFace";
import { bookService } from "../../../Service/Book/BookService";

export const useBookForm = (bookToEdit: Book | null, onClose: () => void) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setCategory(bookToEdit.category);
      setDescription(bookToEdit.description);
      setImage(bookToEdit.image);
    } else {
      setTitle("");
      setAuthor("");
      setCategory("");
      setDescription("");
      setImage("");
    }
  }, [bookToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (bookToEdit) {
        await bookService().updateBook(String(bookToEdit.id), {
          title,
          author,
          category,
          description,
          image,
        });
        alert("تم تحديث الكتاب بنجاح!");
      } else {
        await bookService().createBook({
          title,
          author,
          category,
          description,
          image,
        });
        alert("تم إضافة الكتاب بنجاح!");
      }
      onClose();
    } catch (error) {
      console.error("خطأ في العملية:", error);
      alert("حدث خطأ، حاول مرة أخرى.");
    }
  };

  return {
    title,
    setTitle,
    author,
    setAuthor,
    category,
    setCategory,
    description,
    setDescription,
    image,
    setImage,
    handleSubmit,
  };
};
