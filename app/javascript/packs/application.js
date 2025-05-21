import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "../stylesheets/application.tailwind.css";

// import 'bootstrap/dist/js/bootstrap.bundle'

Rails.start()
Turbolinks.start()
ActiveStorage.start()
