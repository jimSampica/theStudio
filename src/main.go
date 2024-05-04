package main

import (
	"net/http"
	"text/template"
)

func main() {

	mux := http.NewServeMux()


	templates = template.Must(template.ParseGlob("pages/*"))

	mux.HandleFunc("/", homeHandler)

	http.ListenAndServe(":8080", mux)
}

var templates *template.Template

func homeHandler(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "layout", nil)
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "layout", nil)
}
