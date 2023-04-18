# MUSICA :

Une application en architecture microservice pour une bibliotheque de musiques

---

## MUSICA NEST

- La liste des musiques et des albums
- Une base de donné MongoDb

## Test :

- Utilisation d'une base de donné en memoire : <b>MongoseMemory</b>
- Test Unitaire :
  - Ce fait avec Junit , chaque controlleur à un fichier <b>name.controller.spec.ts</b> qui contient les test
- Test d'integration :
  - Ce fait dans le dossier : test

## Deploiement :

- Docker :
  - Dockerfile
- Kubernetes :
  - deploy.yml
  - service.yml

## URI

Pour creer un album

> album [[POST]]

```
{
    "titre":"Liens du 100",
    "dateDeSortie":"2023-01-01",
    "singer":[
        "SDM"
    ],
    "descritption": "LE DERNIER ALBUM DE SDM"
}
```

Pour mettre à jour un album

> album/{id} [[PUT]]

```
{
    "titre":"Liens du 100",
    "dateDeSortie":"2023-01-01",
    "artistes":[
        "SDM"
    ],
    "descritption": "LE DERNIER ALBUM DE SDM"
}
```

Pour prendre la liste des albums

> album [[GET]]

Pour un album

> album/{id} [[GET]]

Pour supprimer

> album/{id} [[GET]]

Pour creer une music

> music [[POST]]

```
{
    "title":"Paris",
    "dateOut":"2018-01-01",
    "singer":[
        "Nsika"
    ],
    "albumId":"f3a33874-b47e-436a-8b6b-49d66ab8c381"
}
```

Pour mettre à jour un music

> music/{id} [[PUT]]

```
> {

    "title":"Paris",
    "dateOut":"2018-01-01",
    "singer":[
        "Niska"
    ],
    "albumId":"f3a33874-b47e-436a-8b6b-49d66ab8c381"

}

```

Pour prendre la liste des albums

> music [[GET]]

Pour un album

> music/{id} [[GET]]
