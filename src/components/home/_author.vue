
        <div class="home-author">
          <div class="home-author__avatar"></div>
          <div class="home-author__name">
            <p>Robert Eberhard</p>
            <p>@roberteberhard</p>
          </div>
        </div>


      .home-author {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .home-author__avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: 100% 100%;
          background-image: url('../../assets/images/roberteberhard-profil.png');
          background-color: $ghost;
        }
        .home-author__name {
          margin-left: 12px;
          p {
            color: $white;
            font-size: 14px;
            font-weight: 400;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            line-height: 1.25;
          }

