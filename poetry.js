// const apiUrl = 'http://localhost:3001/api'

async function getPoetry() {
    try {
        const res = await fetch('http://localhost:3001/api/poetry', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        const data = await res.json();
        const poetryContainer = document.getElementById('poetry-container');

        data.forEach(poetryItem => {
            const poetryContainerChild = document.createElement('div');
            poetryContainerChild.classList.add('col');
            poetryContainerChild.innerHTML = `
            <div class="card shadow-sm">
                <img src="${'http://localhost:3001/' + poetryItem.imgUrl}" alt="" style="background-size: 100% 100%; height: 400px;">
              <div class="card-body">
                <p class="card-text">${poetryItem.title}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      View
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                      tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
    
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                                <img src="${'http://localhost:3001/' + poetryItem.imgUrl}" alt="" style="background-size: 100% 100%; height: 400px;">
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
    
                    </div>
    
                  </div>
                  <button type="button" class="btn btn-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-download" viewBox="0 0 16 16">
                      <path
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z">
                      </path>
                      <path
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z">
                      </path>
                    </svg>
                    <strong>Download</strong>
                  </button>
                </div>
              </div>
            </div>
            `;

            poetryContainer.appendChild(poetryContainerChild);
        });
    } catch (error) {
        console.error(error)
    }
}

getPoetry();