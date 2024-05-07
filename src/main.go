package main

import (
	"net/http"
	"github.com/a-h/templ"
)

func main() {

	component := hello("John")

	mux := http.NewServeMux()

	mux.HandleFunc("/", homeHandler)
	mux.HandleFunc("/about", aboutHandler)

	http.ListenAndServe(":8080", mux)
}
