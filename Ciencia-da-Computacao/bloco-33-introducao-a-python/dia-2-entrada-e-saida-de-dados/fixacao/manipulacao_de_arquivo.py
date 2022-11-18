# file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita,
# #  um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

# # file = open("arquivo.txt", mode="w")

# # Comandos abaixo escrevem no arquivo

# file.write("nome idade\n")
# file.write("Maria 45\n")
# file.write("Miguel 33\n")

# # Comando abaixo também escreve no arquivo

# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
# print("Túlio 22", file=file)

# # Escreve múltiplas linhas
# LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
# file.writelines(LINES)

# # IMPORTANTE fechar o arquivo, pois há limite de arquivos abertos no Sis. Op.
# file.close()

# # escrita
# file = open("arquivo.txt", mode="w")
# file.write("Trybe S2")
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# content = file.read()
# print(content)
# file.close()  # não podemos esquecer de fechar o arquivo

# # escrita
# file = open("arquivo.txt", mode="w")
# LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
# file.writelines(LINES)
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# for line in file:
#     print(
#         line
#     )  # não esqueça que a quebra de linha também é um caractere da linha
# file.close()  # não podemos esquecer de fechar o arquivo

# Bytes

# # escrita
# file = open("arquivo.dat", mode="wb")
# file.write(
#     b"C\xc3\xa1ssio 30"
# )  # o prefixo b em uma string indica que seu valor está codificado em bytes
# file.close()

# # leitura
# file = open("arquivo.dat", mode="rb")
# content = file.read()
# print(content)  # saída: b'C\xc3\xa1ssio 30'
# file.close()  # não podemos esquecer de fechar o arquivo

# students_grades = open("arquivo.txt", mode="r")
# content = students_grades.read()

# for student in students_grades:
#     print(student)

# students = content.split("\n")
# student_and_grade = []

# for student in students:
#     student_and_grade.append(student.split(" "))

# disapproved_students = []

# for student in student_and_grade:
#     if int(student[1]) < 6:
#         disapproved_students.append(student[0])

# disapproved = open("reprovados.txt", mode="w")

# for student in disapproved_students:
#     disapproved.write(f"{student}\n")

# disapproved.close()
# students_grades.close()

# Resposta Trybe

recuStudents = []
with open("arquivo.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
